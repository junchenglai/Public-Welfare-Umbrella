using System;
using System.Collections.Generic;

namespace San.Models
{
    public partial class Log
    {
        public int Key { get; set; }
        public string Name { get; set; }
        public string Tel { get; set; }
        public string Dorm { get; set; }
        public string StuId { get; set; }
        public string Cmd { get; set; }
        public string SanId { get; set; }
        public string Located { get; set; }
        public string SanStatus { get; set; }
        public int? DebitStatus { get; set; }
        public bool? UserStatus { get; set; }
        public string Result { get; set; }
        public DateTime Datetime { get; set; }
    }
}
