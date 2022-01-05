using lovaTestApi.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace lovaTestApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();


            services.AddDbContext<DataContext>(opt => opt.UseInMemoryDatabase(databaseName: "InMemoryDb"),
                                                ServiceLifetime.Scoped,
                                                ServiceLifetime.Scoped);

            //services.AddDbContext<DataContext>(options =>
            //        options.UseSqlServer(
            //            Configuration.GetConnectionString("DefaultConnection"),
            //            b => b.MigrationsAssembly(typeof(DataContext).Assembly.FullName)), ServiceLifetime.Singleton);

            services.AddTransient<IUserOpsRepostitory, UserOpsRepository>();
            services.AddTransient(typeof(IRepository<>), typeof(Repository<>));
         

            services.AddAutoMapper(typeof(Startup));

            services.AddCors(o => o.AddPolicy("CorsPolicy", policy =>
            {
                policy.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                 .AllowCredentials()
                 .WithOrigins("http://localhost:4200");


            }));

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Lova API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();


            app.UseCors("CorsPolicy");


            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapSwagger();
            });

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Lova API V1");
            });
        }
    }
}