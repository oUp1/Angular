using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LearnEnglish.DataLayer.Abstractions;
using LearnEnglish.Models.Entity;
using Microsoft.AspNetCore.Mvc;

namespace LearnEnglish.Web.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        [HttpGet]
        public Task<IEnumerable<User>> Get()
        {
            return _userRepository.GetAllAsync();
        }
        [HttpPost("createUser")]
        public void Create(User user)
        {
            _userRepository.InsertAsync(user);
        }
    }
}