using System.ComponentModel.DataAnnotations;

namespace WebAPI.Dtos
{
    public class CityDto
    {
        public int Id { get; set; }

        [Required (ErrorMessage = "Name is mandatory Field")]
        [StringLength(50, MinimumLength =2)]
        [RegularExpression(".*[a-zA-Z]+.*", ErrorMessage = "Only numerics are not allowed")]
        public string? Name { get; set; }

        //Country Mandatory
        [Required]
        public string? Country { get; set; }
    }
    
}