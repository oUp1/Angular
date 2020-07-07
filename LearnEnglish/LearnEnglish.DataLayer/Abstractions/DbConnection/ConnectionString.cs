namespace LearnEnglish.DataLayer.Abstractions.DbConnection
{
    public class ConnectionString
    {
        public string Value { get; set; }
        public ConnectionString(string connectionString)
        {
            Value = connectionString;
        }
    }
}
