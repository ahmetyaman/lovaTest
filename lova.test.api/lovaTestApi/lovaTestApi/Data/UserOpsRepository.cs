using lovaTestApi.Models;

namespace lovaTestApi.Data
{
    public class UserOpsRepository : Repository<Person>, IUserOpsRepostitory
    {
        public UserOpsRepository(DataContext context) : base(context)
        {
        }
    }
}