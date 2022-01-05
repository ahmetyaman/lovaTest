using lovaTestApi.Data;
using lovaTestApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lovaTestApi.Helpers
{
    public class DbContextSeed
    {
        public static async Task SeedAsync(DataContext context)
        {
            if (!context.Persons.Any())
            {
                context.Persons.AddRange(GetPreconfiguredPersons());
                await context.SaveChangesAsync();
            }
        }

        private static IEnumerable<Person> GetPreconfiguredPersons()
        {
            return new List<Person>()
            {
                new Person{
                    
                    UserName="Ahmet",
                    Password="123"
                },
                new Person{
                    
                    UserName="User",
                    Password="123"
                },

                new Person{
                    
                    UserName="UserName",
                    Password="123"
                },
            };
        }
    }
}