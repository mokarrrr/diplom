namespace diplom.Models;
using Microsoft.EntityFrameworkCore;

    public class MainContext: DbContext
    {
        private static MainContext instance;
        public static MainContext Instantce
        {
            get
            {
                if (instance == null)
                {
                    instance = new MainContext();

                }
                return instance;
            }
        }

    public DbSet<Admin> Admin { get; set; }
    public DbSet<catalog_product> catalog_product { get; set; }
    public DbSet<Package> Package { get; set; }
    public DbSet<Product> Product { get; set; }
    public DbSet<Product_Raiting> Product_Raiting { get; set; }
    public DbSet<provider_product> provider_product { get; set; }
    public DbSet<Rate> Rate { get; set; }
    public DbSet<user_basket> user_basket { get; set; }
    public DbSet<user_like> user_like { get; set; }
    public DbSet<_catalog> _catalog { get; set; }
    public DbSet<_order> _order { get; set; }
    public DbSet<_Provider> _Provider { get; set; }
    public DbSet<_status> _status { get; set; }
    public DbSet<_User> _User { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(@"Data Source=192.168.227.12;User ID=user06;Password=06;database=123;TrustServerCertificate=True");

        //optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-SD2NSU5\MSSQLSERVER05;User ID=sa;Password=12345;database=DiplomBD;TrustServerCertificate=True");
    }
    public MainContext()
    {
    }
}

