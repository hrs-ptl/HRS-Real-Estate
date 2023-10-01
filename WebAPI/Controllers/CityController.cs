using Microsoft.AspNetCore.Mvc;
using WebAPI.Dtos;
using WebAPI.Interfaces;
using WebAPI.Models;
//using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {


        private readonly IUnitOfWork uow;


        public CityController( IUnitOfWork uow)
        {
            
            this.uow = uow;

        }

        //Get api/city
        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            var cities = await uow.CityRepository.GetCitiesAsync();

            var citiesDto = from c in cities
                select new CityDto()
                {
                    Id = c.Id,
                    Name =c.Name
                };
            return Ok(citiesDto);
        }

        //Post api/city/add?cityName=Miami
        //Post api/city/add/Miami
        // [HttpPost("add")]
        // [HttpPost("add/{cityname}")]
        // public async Task<IActionResult> AddCity(string cityName)
        // {
        //     City city = new City();
        //     city.Name=cityName;
        //     await dc.Cities.AddAsync(city);
        //     await dc.SaveChangesAsync();
        //     return Ok(city);
        // }

        //Post api/city/post -- Post the data in JSON Format
        [HttpPost("post")]
         public async Task<IActionResult> AddCity(CityDto cityDto)
        {
            var city = new City{
              Name = cityDto.Name,
              LastUpdatedBy = 1,
              LastUpdatedOn = DateTime.Now
            };
            uow.CityRepository.AddCity(city);
            await uow.SaveASync();
            return StatusCode(201);
        }

        [HttpDelete("delete/{id}")]
         public async Task<IActionResult> DeleteCity(int id)
        {
            uow.CityRepository.DeleteCity(id);
            await uow.SaveASync();
            return Ok(id);
        }
    }
}