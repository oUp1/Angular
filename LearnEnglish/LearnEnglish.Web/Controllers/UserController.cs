using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LearnEnglish.DataLayer.Abstractions;
using LearnEnglish.Models.Entity;
using Microsoft.AspNetCore.Mvc;

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