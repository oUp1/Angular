using Dapper;
using LearnEnglish.DataLayer.Abstractions.DbConnection;
using LearnEnglish.DataLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearnEnglish.DataLayer
{
    public abstract class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private readonly IDbConnectionFactory _factory;
        private readonly string _tableName;

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
        public Task DeleteRowAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<T> GetRowAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task InsertAsync(T item)
        {
            throw new NotImplementedException();
        }

        public Task<int> SaveRangeAsync(IEnumerable<T> list)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(T item)
        {
            throw new NotImplementedException();
        }
    }
}
