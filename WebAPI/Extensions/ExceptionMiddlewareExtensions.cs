using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Builder;


    // var app = WebApplication.CreateBuilder(args).Build();

namespace WebAPI.Extensions
{

    
    public static class ExceptionMiddlewareExtensions
    {
        public static void ConfigureExceptionHandler(IApplicationBuilder app, IWebHostEnvironment Environment)
        {
             if (Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else {
                app.UseExceptionHandler(
                    options =>
                    {
                        options.Run(
                            async context =>
                            {
                                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                                var ex = context.Features.Get<IExceptionHandlerFeature>();
                                if (ex != null)
                                {
                                    await context.Response.WriteAsync(ex.Error.Message);
                                }
                            }
                        );
                    }
                );

            }
        }
    }
}