using System.Data.SqlClient;

namespace LearnEnglish.DataLayer.Abstractions.DbConnection
{
    public class DbConnectionFactory : IDbConnectionFactory
    {
        private readonly string _connectionString;

        public DbConnectionFactory(ConnectionString connectionString)
        {
            _connectionString = connectionString.Value;
        }

        public SqlConnection GetConnection()
        {
            return new SqlConnection(_connectionString);
        }
    }
}
