using AutoMapper;
using lovaTestApi.Data;
using lovaTestApi.Dtos;
using lovaTestApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace lovaTestApi.Controllers
{
    [Produces("application/json")]
    [Route("api/users")]
    [ApiController]
    public class UserOpsController : ControllerBase
    {
        private IUserOpsRepostitory _userOpsRepostitory;
        private readonly IMapper _mapper;

        public UserOpsController(IUserOpsRepostitory userOpsRepostitory, IMapper mapper)
        {
            _userOpsRepostitory = userOpsRepostitory;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<UserDto>), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<IEnumerable<UserDto>>> GetAllUser()
        {
            var persons = await _userOpsRepostitory.GetAllAsync();
            var usersToReturn = _mapper.Map<List<UserDto>>(persons);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}", Name = "GetUserById")]
        [ProducesResponseType(typeof(UserDto), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<UserDto>> GetUserById(int id)
        {
            var person = await _userOpsRepostitory.GetByIdAsync(id);
            var userToReturn = _mapper.Map<UserDto>(person);

            return Ok(userToReturn);
        }

        [HttpPost(Name = "Add")]
        [ProducesResponseType(typeof(UserDto), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<UserDto>> Add([FromBody] UserForCreaDto user)
        {
            var person = _mapper.Map<Person>(user);
            var recordedPerson = await _userOpsRepostitory.AddAsync(person);
            var userToReturn = _mapper.Map<UserDto>(recordedPerson);
            return Ok(userToReturn);
        }

        [HttpDelete("{id}",Name = "Remove")]
        [ProducesResponseType(typeof(UserDto), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<UserDto>> Remove(int id)
        {
            var person = await _userOpsRepostitory.GetByIdAsync(id);

            await _userOpsRepostitory.RemoveAsync(person);

            var userToReturn = _mapper.Map<UserDto>(person);

            return Ok(userToReturn);
        }
      
        [HttpPut("{id}",Name = "Update")]
        [ProducesResponseType(typeof(UserDto), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<UserDto>> Update(int id, [FromBody] UserForCreaDto user)
        {
            var upPerson = _mapper.Map<Person>(user);
            upPerson.id = id;
          
            var person = await _userOpsRepostitory.UpdateAsync(upPerson);
            var userToReturn = _mapper.Map<UserDto>(person);
            return Ok(userToReturn);
        }
    }
}