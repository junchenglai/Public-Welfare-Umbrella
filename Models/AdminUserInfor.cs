using System;
using System.Collections.Generic;

namespace San.Models
{
    public partial class AdminUserInfor
    {
        public int KeyId { get; set; }
        public string Openid { get; set; }
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public int? Errcode { get; set; }
        public string SessionId { get; set; }
        public DateTime? Datetime { get; set; }
        public string Name { get; set; }
    }
}
