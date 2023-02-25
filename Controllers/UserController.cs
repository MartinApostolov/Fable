using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Fable.Models;
using System.Threading.Tasks;

namespace Fable.Controllers
{
    public class UserController : Controller
    {
        private readonly UserManager<User> userManager;
        // TODO: Model

        public UserController(UserManager<User> userManager)
        {
            this.userManager = userManager;
        }
        public async Task<IActionResult> Details()
        {
            User user = await userManager.GetUserAsync(User);
            // TODO: DTO
            UserDTO userDTO = new UserDTO
            {
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName
            };

            return View(userDTO);
        }
    }
}
