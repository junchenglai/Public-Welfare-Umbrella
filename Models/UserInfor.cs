using System;
using System.Collections.Generic;

namespace San.Models
{
    public partial class UserInfor
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Tel { get; set; }
        public string Dorm { get; set; }
        public string StuId { get; set; }
        public string SanId { get; set; }
        public bool Status { get; set; }
    }
}
