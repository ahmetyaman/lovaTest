using lovaTestApi.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace lovaTestApi.Helpers
{
    public static class MigrationHelper
    {
        public static IHost MigrateDatabase(this IHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                try
                {
                    var context = scope.ServiceProvider.GetRequiredService<DataContext>(); 

                    if(context .Database.ProviderName!= "Microsoft.EntityFrameworkCore.InMemory")
                    {
                        context.Database.Migrate();
                    }

                    DbContextSeed.SeedAsync(context).Wait();
                }
                catch (System.Exception)
                {

                    throw;
                }
            }

            return host;
            
        }
    }
}