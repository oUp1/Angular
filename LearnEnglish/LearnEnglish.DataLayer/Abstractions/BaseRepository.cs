using Dapper;
using LearnEnglish.DataLayer.Abstractions.DbConnection;
using LearnEnglish.DataLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace LearnEnglish.DataLayer
{
    public abstract class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private readonly IDbConnectionFactory _factory;
        private readonly string _tableName;

        private readonly IEnumerable<PropertyInfo> Properties = typeof(T).GetProperties();

        public BaseRepository(IDbConnectionFactory factory, string tableName)
        {
            _factory = factory;
            _tableName = tableName;
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            using (var connection = _factory.GetConnection())
            {
                return await connection.QueryAsync<T>($"SELECT * FROM {_tableName}");
            }
        }
        public async Task DeleteRowAsync(int id)
        {
            using (var connection = _factory.GetConnection())
            {
               await connection.ExecuteAsync($"DELETE FROM {_tableName} WHERE id = {id}");
            }
        }
        public async Task<T> GetRowAsync(int id)
        {
            using (var connection = _factory.GetConnection())
            {
                return await connection.QuerySingleOrDefaultAsync<T>($"Select * FROM {_tableName} WHERE id = {id}");
            }
        }
        public async Task InsertAsync(T item)
        {
            using (var connection = _factory.GetConnection())
            {
                await connection.ExecuteAsync(GenerateInsertQuery(), item);
            }
        }

        public Task<int> SaveRangeAsync(IEnumerable<T> list)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(T item)
        {
            throw new NotImplementedException();
        }

        private string GenerateInsertQuery()
        {
            var insertQuery = new StringBuilder($"INSERT INTO {_tableName} ");

            insertQuery.Append("(");

            var properties = GenerateListOfProperties(Properties);
            properties.ForEach(prop => { insertQuery.Append($"[{prop}],"); });

            insertQuery
                .Remove(insertQuery.Length - 1, 1)
                .Append(") VALUES (");

            properties.ForEach(prop => { insertQuery.Append($"@{prop},"); });

            insertQuery
                .Remove(insertQuery.Length - 1, 1)
                .Append(")");

            return insertQuery.ToString();
        }
        private static List<string> GenerateListOfProperties(IEnumerable<PropertyInfo> listOfProperties)
        {
            return (from prop in listOfProperties
                    let attributes = prop.GetCustomAttributes(typeof(DescriptionAttribute), false)
                    where attributes.Length <= 0 || (attributes[0] as DescriptionAttribute)?.Description != "ignore"
                    select prop.Name).ToList();
        }
    }
}
