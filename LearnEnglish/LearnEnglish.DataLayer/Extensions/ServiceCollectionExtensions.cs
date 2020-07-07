using LearnEnglish.DataLayer.Abstractions;
using LearnEnglish.DataLayer.Abstractions.DbConnection;
using LearnEnglish.DataLayer.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace LearnEnglish.DataLayer.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddScoped<IDbConnectionFactory, DbConnectionFactory>();
            services.AddTransient<IUserRepository, UserRepository>();

            return services;
        }
    }
}
