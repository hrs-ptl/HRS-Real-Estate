using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;
using System.Net;
using WebAPI.Data;
using WebAPI.Extensions;
using WebAPI.Helpers;
using WebAPI.Interfaces;
using WebAPI.Middlewares;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<DataContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));
builder.Services.AddControllers().AddNewtonsoftJson();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();


var app = builder.Build();

// Configure the HTTP request pipeline.

// object value = app.ConfigureExceptionHandler(env);

app.UseMiddleware<ExceptionMiddleware>();

app.UseRouting();

app.UseCors(m => m.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
app.UseAuthorization();

app.MapControllers();

app.Run();
