
namespace WebAPI.Models
{
    public class City
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public static implicit operator string(City v)
        {
            throw new NotImplementedException();
        }

    }
}