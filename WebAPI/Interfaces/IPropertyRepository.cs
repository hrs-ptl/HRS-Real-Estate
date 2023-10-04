using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IPropertyRepository
    {
        Task<IEnumerable<Property>> GetPropertiesASync(int SellRent);

        void AddProperty(Property property);

        void DeleteProperty(int id);         
    }
}