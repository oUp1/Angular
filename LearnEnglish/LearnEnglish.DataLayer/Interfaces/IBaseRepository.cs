using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearnEnglish.DataLayer.Interfaces
{
    public interface IBaseRepository<T>
    {
        Task<IEnumerable<T>> GetAllAsync();

        Task DeleteRowAsync(int id);

        Task<T> GetRowAsync(int id);

        Task<int> SaveRangeAsync(IEnumerable<T> list);

        Task UpdateAsync(T item);

        Task InsertAsync(T item);
    }
}
