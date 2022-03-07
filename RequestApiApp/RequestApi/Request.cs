using System.ComponentModel.DataAnnotations;

namespace RequestApi
{
    public class Request
    {
        public int Id { get; set; }

        
        public string RequestType { get; set; } = string.Empty;

        
        public string RequestIssue { get; set; } = string.Empty;

        [StringLength(500)]
        public string Notes { get; set; } = string.Empty;

        [StringLength(12)]
        public string RequestSerialNumber { get; set; } = string.Empty;


        //public Date RequestDate { get; set; }
        public DateTime RequestDate { get; set; }

        [StringLength(40)]
        public string RequestName { get; set; } = string.Empty;

        
        public string RequestEmail { get; set; } = string.Empty;

        
        public string RequestPhotoPathFile { get; set; } = string.Empty;
    }
}
