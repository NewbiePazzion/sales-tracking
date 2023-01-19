// NOT AVAILABLE ERROR
export const NOT_AVAILABLE = 'N/A';

// NOT FOUND ERROR
export const ERROR_DEPARTMENT_PIC_NOT_FOUND = 'Department PIC not found.';

// INVALID ERROR
export const ERROR_INVALID_USER_OR_PASSWORD = 'Username and/or Password wrong!';
export const ERROR_INVALID_LOCATION = 'Can\'t process monitoring report due to invalid location.';
export const ERROR_INVALID_ISSUE_ACTIVITY_CONTENT = 'Can\'t process issue activity due to invalid content.';
export const ERROR_INVALID_MONITORING_TOOL = 'Tool already exists in selected location.';

// FORBIDDEN ERROR
export const ERROR_FORBIDDEN_ISSUE_NEXT_PROGRESS = (state) => `You are not allowed to ${state} this issue!`;
export const ERROR_FORBIDDEN_UPDATE_ISSUE_ASSIGNEE = (deptName) => `You are not allowed to change assignee! Only ${deptName} department members can change assignee.`;
export const ERROR_FORBIDDEN_UPDATE_ISSUE = 'You are not allowed to update this issue!';
export const ERROR_FORBIDDEN_UPDATE_FAVORITE_MONITORING_TOOL_TYPE = 'You are not allowed to update favorite monitoring tool type! Monitoring tool type must be 5 or less.';
