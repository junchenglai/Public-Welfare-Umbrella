using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace San.Models
{
    public partial class SanContext : DbContext
    {
        public virtual DbSet<AdminUserInfor> AdminUserInfor { get; set; }
        public virtual DbSet<Log> Log { get; set; }
        public virtual DbSet<SanData> SanData { get; set; }
        public virtual DbSet<UserInfor> UserInfor { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(@"Password=123456;Persist Security Info=True;User ID=sa;Initial Catalog=San;Data Source=DESKTOP-8I1FLG7");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AdminUserInfor>(entity =>
            {
                entity.HasKey(e => e.KeyId);

                entity.ToTable("Admin_UserInfor");

                entity.Property(e => e.KeyId).HasColumnName("KeyID");

                entity.Property(e => e.AccessToken)
                    .HasColumnName("access_token")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Datetime).HasColumnType("datetime");

                entity.Property(e => e.Errcode).HasColumnName("errcode");

                entity.Property(e => e.Name)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Openid)
                    .IsRequired()
                    .HasColumnName("openid")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RefreshToken)
                    .HasColumnName("refresh_token")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.SessionId)
                    .HasColumnName("SessionID")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Log>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.Property(e => e.Cmd)
                    .IsRequired()
                    .HasColumnName("cmd")
                    .HasColumnType("nchar(9)");

                entity.Property(e => e.Datetime).HasColumnType("datetime");

                entity.Property(e => e.DebitStatus).HasColumnName("Debit_Status");

                entity.Property(e => e.Dorm).HasColumnType("nchar(15)");

                entity.Property(e => e.Located)
                    .IsRequired()
                    .HasColumnType("nchar(10)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("nchar(5)");

                entity.Property(e => e.Result)
                    .IsRequired()
                    .HasColumnType("nchar(20)");

                entity.Property(e => e.SanId)
                    .IsRequired()
                    .HasColumnName("San_ID")
                    .HasColumnType("nchar(5)");

                entity.Property(e => e.SanStatus)
                    .IsRequired()
                    .HasColumnName("San_Status")
                    .HasColumnType("nchar(4)");

                entity.Property(e => e.StuId)
                    .HasColumnName("Stu_ID")
                    .HasColumnType("nchar(13)");

                entity.Property(e => e.Tel)
                    .IsRequired()
                    .HasColumnType("nchar(11)");

                entity.Property(e => e.UserStatus).HasColumnName("User_Status");
            });

            modelBuilder.Entity<SanData>(entity =>
            {
                entity.HasKey(e => e.KeyNum);

                entity.ToTable("San_Data");

                entity.Property(e => e.LastTime).HasColumnType("datetime");

                entity.Property(e => e.Located)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SanId)
                    .IsRequired()
                    .HasColumnName("San_ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<UserInfor>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.Dorm).HasColumnType("nchar(20)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("nchar(20)");

                entity.Property(e => e.SanId)
                    .HasColumnName("San_ID")
                    .HasColumnType("nchar(10)");

                entity.Property(e => e.StuId)
                    .IsRequired()
                    .HasColumnName("Stu_ID")
                    .HasColumnType("nchar(13)");

                entity.Property(e => e.Tel)
                    .IsRequired()
                    .HasColumnType("nchar(11)");
            });
        }
    }
}
