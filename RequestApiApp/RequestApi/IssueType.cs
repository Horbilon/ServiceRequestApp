using System.ComponentModel.DataAnnotations;

namespace RequestApi
{
    public class IssueType
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string IssueName { get; set; } = string.Empty;
    }
}
