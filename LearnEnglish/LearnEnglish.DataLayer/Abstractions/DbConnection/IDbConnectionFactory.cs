using System.Data.SqlClient;

namespace LearnEnglish.DataLayer.Abstractions.DbConnection
{
    public interface IDbConnectionFactory
    {
        SqlConnection GetConnection();
    }
}
