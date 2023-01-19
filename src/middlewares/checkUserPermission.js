import { user, role } from '../models';
import UserService from '../services/usersService';
import ForbiddenError from '../exceptions/forbiddenError';
import { USER_ROLES } from '../fixtures/auth';

const userService = UserService({ User: user, Role: role });

const handler = (menu, permission) => (
  async (req, _, next) => {
    // get user profile to compare to
    const userProfile = await userService.getUserbyId(req.user.id);
    // if user does not have menu permissions, then send unauthorized error. otherwise, proceed to next process
    const allowed = (userProfile.roles && userProfile.roles.length > 0)
      ? userProfile.roles.some((userRole) => userRole.permissions.find((o) => o.name === permission && o.menu.name === menu))
      : false;

    if (!allowed) {
      return next(new ForbiddenError({
        roleName: USER_ROLES.MANAGER,
        origin: `${req.originalMethod || req.method} - ${req.originalUrl}`,
      }));
    }

    return next();
  }
);

export default handler;
