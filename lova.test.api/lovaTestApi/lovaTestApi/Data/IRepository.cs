using lovaTestApi.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace lovaTestApi.Data
{
    public interface IRepository<T> where T : IEntityBase
    {
        Task<IEnumerable<T>> GetAllAsync();

        Task<T> GetByIdAsync(int id);

        Task<T> AddAsync(T entity);

        Task<T> UpdateAsync(T entity);

        Task RemoveAsync(T entity);

        Task<IEnumerable<T>> GetAsync(Expression<Func<T, bool>> predicate);
    }
}