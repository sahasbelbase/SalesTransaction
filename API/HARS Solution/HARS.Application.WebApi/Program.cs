using HARS.Application.Service.Customer;
using HARS.Application.Service.Store;
using HARS.Application.Service.Branch;
using HARS.Application.Service.Department;
using HARS.Application.Service.Product;
using HARS.Application.Service.Invoice;
using SD.LLBLGen.Pro.DQE.SqlServer;
using SD.LLBLGen.Pro.ORMSupportClasses;
using HARS.Application.Service.SalesTransaction;
using HARS.Application.Service.Common;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);


        builder.Configuration.AddJsonFile("appsettings.json");

        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddScoped<ICustomerService, CustomerService>();
        builder.Services.AddScoped<IBranchService, BranchService>();
        builder.Services.AddScoped<IInvoiceService, InvoiceService>();
        builder.Services.AddScoped<IStoreService, StoreService>();
        builder.Services.AddScoped<IDepartmentService, DepartmentService>();
        builder.Services.AddScoped<IProductService, ProductService>();
        builder.Services.AddScoped<IInvoiceService, InvoiceService>();
        builder.Services.AddScoped<ISalesTransactionService, SalesTransactionService>();
        builder.Services.AddScoped<ICommonService, CommonService>();    




        builder.Services.AddCors((setup) =>
        {
            setup.AddPolicy("default", (options) =>
            {
                options.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();
            });

        });

        var app = builder.Build();

        var configuration = app.Configuration;

        RuntimeConfiguration.ConfigureDQE<SQLServerDQEConfiguration>(c => c.AddDbProviderFactory(typeof(System.Data.SqlClient.SqlClientFactory)));
        RuntimeConfiguration.AddConnectionString(configuration["ConnectionStrings:StringKey"], configuration["ConnectionStrings:DefaultConnection"]);
        RuntimeConfiguration.ConfigureDQE<SQLServerDQEConfiguration>(c => c.SetDefaultCompatibilityLevel(SqlServerCompatibilityLevel.SqlServer2012));
        RuntimeConfiguration.ConfigureDQE<SQLServerDQEConfiguration>(c => c.AddCatalogNameOverwrite("*", configuration["ConnectionStrings:CatalogNameToUse"]));


        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseCors("default");
        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}