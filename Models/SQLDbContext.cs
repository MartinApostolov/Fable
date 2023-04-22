using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Fable.Models
{
    public class SQLDbContext : DbContext
    {
        public SQLDbContext(DbContextOptions<SQLDbContext> options) : base(options)
        {
        }

        public DbSet<Login> Logins { get; set; }
    }
}
