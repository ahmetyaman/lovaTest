using lovaTestApi.Models;
using Microsoft.EntityFrameworkCore;

namespace lovaTestApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

      

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Person>().ToTable("Person");
        }

        public DbSet<Person> Persons { get; set; }
    }
}