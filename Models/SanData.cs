using System;
using System.Collections.Generic;

namespace San.Models
{
    public partial class SanData
    {
        public int KeyNum { get; set; }
        public string SanId { get; set; }
        public string Located { get; set; }
        public string Status { get; set; }
        public int? Debit { get; set; }
        public DateTime? LastTime { get; set; }
    }
}
