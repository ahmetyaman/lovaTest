using AutoMapper;
using lovaTestApi.Dtos;
using lovaTestApi.Models;

namespace lovaTestApi.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Person, UserDto>().ReverseMap();
            CreateMap<Person, UserForCreaDto>().ReverseMap();
        }
    }
}