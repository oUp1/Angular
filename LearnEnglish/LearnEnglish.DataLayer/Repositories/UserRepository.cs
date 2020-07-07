using LearnEnglish.DataLayer.Abstractions;
using LearnEnglish.DataLayer.Abstractions.DbConnection;
using LearnEnglish.Models.Entity;

namespace LearnEnglish.DataLayer.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        private const string _tableName = "Users";

        public UserRepository(IDbConnectionFactory factory)
            : base(factory, _tableName)
        {

        }
    }
}
