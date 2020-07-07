using System;
using System.Collections.Generic;
using System.Text;

namespace LearnEnglish.Models.Entity
{
    public class User
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirthday { get; set; }
        public string Email { get; set; }
    }
}
