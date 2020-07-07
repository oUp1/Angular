using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LearnEnglish.DataLayer.Abstractions;
using LearnEnglish.Models.Entity;

namespace LearnEnglish.Web.Controllers
{
    [Route("api/getUser")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        // GET: api/ListOf
        [HttpGet]
        public Task<IEnumerable<User>> Get()
        {
            return _userRepository.GetAllAsync();
        }
    }
}
