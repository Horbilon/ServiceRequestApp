using Microsoft.EntityFrameworkCore;

namespace RequestApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Request> Requests { get; set; }

        public DbSet<IssueType> IssueTypes { get; set; }


    }
}
