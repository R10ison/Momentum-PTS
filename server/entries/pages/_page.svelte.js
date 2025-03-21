import { p as push, v as attr_class, w as stringify, q as push_element, t as escape_html, u as pop_element, x as attr, y as bind_props, n as pop, F as FILENAME, z as await_block, A as ensure_array_like } from "../../chunks/index.js";
import "clsx";
import { g as getDepartmentList, a as getPriorityList, b as getEmployeeList, c as getTaskList, d as getStatusList, H as Header } from "../../chunks/header.js";
import "../../chunks/client.js";
const CommentIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAYAAACUef2IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEKSURBVHgB7ZRNTgJBEIVf4WCIqzlCaYY4uBqP4A30BMYTcAThBHoD5AR6A+AE7pQYFn2E2UnC0I/qCZAQNvzMivBt+nV18qqqF09gaJpqbV57Jag4AoE4P/Nd58YuKgtzGXj6FxRwOAJeIJO6fJq8L6fVpDVARVwnd9+q9gOoGmEejuqNl5yNz8anYTxt5CLIUB0KTHMpVZJ2ROTZ0mkY7l780P2N+0Hf3LbaVtipcUhHUkZu8tORdRsLI0s3BSW2/Gu7ye9DqFny9Uh2dzEO6RgiM0jZ2qPZzMDoDcX/k1xe9Qj/tZp+HzaMVTUOZiBje4pt0r5N/o4DiDZu9cYjPU1whIIfq7UOYQE1XWH7Zv80oAAAAABJRU5ErkJggg==";
Task_card[FILENAME] = "src/components/task-card.svelte";
function Task_card($$payload, $$props) {
  push(Task_card);
  let task = $$props["task"];
  function getStatusClass(statusId) {
    const classMap = {
      1: "task-to-start",
      2: "task-in-progress",
      3: "task-ready-for-testing",
      4: "task-finished"
    };
    return classMap[statusId] || "";
  }
  $$payload.out += `<button${attr_class(`card-wrapper ${stringify(getStatusClass(task.status.id))}`, "svelte-2pli9n")}>`;
  push_element($$payload, "button", 24, 0);
  $$payload.out += `<div class="card-info-wrapper svelte-2pli9n">`;
  push_element($$payload, "div", 25, 2);
  $$payload.out += `<div${attr_class(`card-importance ${stringify(getStatusClass(task.status.id))}`, "svelte-2pli9n")}>`;
  push_element($$payload, "div", 26, 4);
  $$payload.out += `${escape_html(task.priority.name)}</div>`;
  pop_element();
  $$payload.out += ` <div class="card-department svelte-2pli9n">`;
  push_element($$payload, "div", 27, 4);
  $$payload.out += `${escape_html(task.department.name)}</div>`;
  pop_element();
  $$payload.out += ` <div class="card-date svelte-2pli9n">`;
  push_element($$payload, "div", 28, 4);
  $$payload.out += `${escape_html(task.due_date)}</div>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <div class="card-text-wrapper svelte-2pli9n">`;
  push_element($$payload, "div", 30, 2);
  $$payload.out += `<b>`;
  push_element($$payload, "b", 31, 4);
  $$payload.out += `${escape_html(task.name)}</b>`;
  pop_element();
  $$payload.out += ` <p>`;
  push_element($$payload, "p", 32, 4);
  $$payload.out += `${escape_html(task.description)}</p>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <div class="card-footer-wrapper svelte-2pli9n">`;
  push_element($$payload, "div", 34, 2);
  $$payload.out += `<img${attr("src", task.employee.avatar)} alt="employee picture" class="card-employee-image svelte-2pli9n">`;
  push_element($$payload, "img", 35, 4);
  pop_element();
  $$payload.out += ` <div class="task-comment svelte-2pli9n">`;
  push_element($$payload, "div", 36, 4);
  $$payload.out += `<img${attr("src", CommentIcon)} alt="Comment Icon">`;
  push_element($$payload, "img", 37, 6);
  pop_element();
  $$payload.out += ` <p>`;
  push_element($$payload, "p", 38, 6);
  $$payload.out += `1</p>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</button>`;
  pop_element();
  bind_props($$props, { task });
  pop();
}
Task_card.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Hero[FILENAME] = "src/components/hero.svelte";
function Hero($$payload, $$props) {
  push(Hero);
  let departments, checkedDepartments, priorities, checkedPriorities, employees, checkedEmployees, tasks, statuses;
  let selected = null;
  function getStatusClass(statusId) {
    const classMap = {
      1: "task-to-start",
      2: "task-in-progress",
      3: "task-ready-for-testing",
      4: "task-finished"
    };
    return classMap[statusId] || "";
  }
  departments = getDepartmentList();
  checkedDepartments = [];
  priorities = getPriorityList();
  checkedPriorities = [];
  employees = getEmployeeList();
  checkedEmployees = [];
  tasks = getTaskList();
  statuses = getStatusList();
  $$payload.out += `<section class="page-section svelte-p3btxz">`;
  push_element($$payload, "section", 35, 0);
  $$payload.out += `<h1 class="svelte-p3btxz">`;
  push_element($$payload, "h1", 36, 2);
  $$payload.out += `დავალებების გვერდი</h1>`;
  pop_element();
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <section class="page-section svelte-p3btxz">`;
  push_element($$payload, "section", 38, 0);
  $$payload.out += `<nav class="dropdown-button-container svelte-p3btxz">`;
  push_element($$payload, "nav", 39, 2);
  $$payload.out += `<li class="dropdown-parent svelte-p3btxz">`;
  push_element($$payload, "li", 40, 4);
  $$payload.out += `<input type="checkbox"${attr("checked", selected === "d", true)} id="departmentCheckbox" class="dropdown-checkbox svelte-p3btxz">`;
  push_element($$payload, "input", 41, 6);
  pop_element();
  $$payload.out += ` <label class="dropdown-button svelte-p3btxz" for="departmentCheckbox">`;
  push_element($$payload, "label", 42, 6);
  $$payload.out += `დეპარტამენტი</label>`;
  pop_element();
  $$payload.out += ` <div class="dropdown-content svelte-p3btxz">`;
  push_element($$payload, "div", 44, 6);
  $$payload.out += `<!---->`;
  await_block(
    departments,
    () => {
      $$payload.out += `waiting`;
    },
    (departmentList) => {
      const each_array = ensure_array_like(departmentList);
      $$payload.out += `<!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let department = each_array[$$index];
        $$payload.out += `<label class="dropdown-content-parent svelte-p3btxz">`;
        push_element($$payload, "label", 49, 3);
        $$payload.out += `<input type="checkbox" class="dropdown-content-checkbox svelte-p3btxz"${attr("checked", checkedDepartments.includes(department), true)}${attr("value", department)}>`;
        push_element($$payload, "input", 51, 4);
        pop_element();
        $$payload.out += ` <p>`;
        push_element($$payload, "p", 52, 4);
        $$payload.out += `${escape_html(department.name)}</p>`;
        pop_element();
        $$payload.out += `</label>`;
        pop_element();
      }
      $$payload.out += `<!--]-->`;
    }
  );
  $$payload.out += `<!----></div>`;
  pop_element();
  $$payload.out += `</li>`;
  pop_element();
  $$payload.out += ` <li class="dropdown-parent svelte-p3btxz">`;
  push_element($$payload, "li", 60, 4);
  $$payload.out += `<input type="checkbox"${attr("checked", selected === "b", true)} id="priorityCheckbox" class="dropdown-checkbox svelte-p3btxz">`;
  push_element($$payload, "input", 61, 6);
  pop_element();
  $$payload.out += ` <label class="dropdown-button svelte-p3btxz" for="priorityCheckbox">`;
  push_element($$payload, "label", 62, 6);
  $$payload.out += `პრიორიტეტი</label>`;
  pop_element();
  $$payload.out += ` <div class="dropdown-content svelte-p3btxz">`;
  push_element($$payload, "div", 63, 6);
  $$payload.out += `<!---->`;
  await_block(
    priorities,
    () => {
      $$payload.out += `waiting`;
    },
    (prioritiesList) => {
      const each_array_1 = ensure_array_like(prioritiesList);
      $$payload.out += `<!--[-->`;
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let priority = each_array_1[$$index_1];
        $$payload.out += `<label class="dropdown-content-parent svelte-p3btxz">`;
        push_element($$payload, "label", 68, 3);
        $$payload.out += `<input type="checkbox" class="dropdown-content-checkbox svelte-p3btxz"${attr("checked", checkedPriorities.includes(priority), true)}${attr("value", priority)}>`;
        push_element($$payload, "input", 70, 4);
        pop_element();
        $$payload.out += ` <p>`;
        push_element($$payload, "p", 71, 4);
        $$payload.out += `${escape_html(priority.name)}</p>`;
        pop_element();
        $$payload.out += `</label>`;
        pop_element();
      }
      $$payload.out += `<!--]-->`;
    }
  );
  $$payload.out += `<!----></div>`;
  pop_element();
  $$payload.out += `</li>`;
  pop_element();
  $$payload.out += ` <li class="dropdown-parent svelte-p3btxz">`;
  push_element($$payload, "li", 79, 4);
  $$payload.out += `<input type="checkbox"${attr("checked", selected === "c", true)} id="staffCheckbox" class="dropdown-checkbox svelte-p3btxz">`;
  push_element($$payload, "input", 80, 6);
  pop_element();
  $$payload.out += ` <label class="dropdown-button svelte-p3btxz" for="staffCheckbox">`;
  push_element($$payload, "label", 81, 6);
  $$payload.out += `თანამშრომელი</label>`;
  pop_element();
  $$payload.out += ` <div class="dropdown-content svelte-p3btxz">`;
  push_element($$payload, "div", 82, 6);
  $$payload.out += `<!---->`;
  await_block(
    employees,
    () => {
      $$payload.out += `waiting`;
    },
    (employeeList) => {
      const each_array_2 = ensure_array_like(employeeList);
      $$payload.out += `<!--[-->`;
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let employee = each_array_2[$$index_2];
        $$payload.out += `<label class="dropdown-content-parent svelte-p3btxz">`;
        push_element($$payload, "label", 87, 3);
        $$payload.out += `<input type="checkbox" class="dropdown-content-checkbox svelte-p3btxz"${attr("checked", checkedEmployees.includes(employee), true)}${attr("value", employee)}>`;
        push_element($$payload, "input", 89, 4);
        pop_element();
        $$payload.out += ` <p>`;
        push_element($$payload, "p", 90, 4);
        $$payload.out += `${escape_html(employee.name)}</p>`;
        pop_element();
        $$payload.out += `</label>`;
        pop_element();
      }
      $$payload.out += `<!--]-->`;
    }
  );
  $$payload.out += `<!----></div>`;
  pop_element();
  $$payload.out += `</li>`;
  pop_element();
  $$payload.out += `</nav>`;
  pop_element();
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <section class="page-section svelte-p3btxz">`;
  push_element($$payload, "section", 100, 0);
  $$payload.out += `<div class="task-status-wrapper svelte-p3btxz">`;
  push_element($$payload, "div", 101, 2);
  $$payload.out += `<!---->`;
  await_block(
    statuses,
    () => {
    },
    (statusList) => {
      const each_array_3 = ensure_array_like(statusList);
      $$payload.out += `<!--[-->`;
      for (let $$index_4 = 0, $$length = each_array_3.length; $$index_4 < $$length; $$index_4++) {
        let status = each_array_3[$$index_4];
        $$payload.out += `<div>`;
        push_element($$payload, "div", 104, 3);
        $$payload.out += `<div${attr_class(`task-status ${stringify(getStatusClass(status.id))}`, "svelte-p3btxz")}>`;
        push_element($$payload, "div", 105, 8);
        $$payload.out += `${escape_html(status.name)}</div>`;
        pop_element();
        $$payload.out += ` <!---->`;
        await_block(
          tasks,
          () => {
          },
          (taskList) => {
            const each_array_4 = ensure_array_like(taskList);
            $$payload.out += `<!--[-->`;
            for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
              let task = each_array_4[$$index_3];
              if (task.status.id === status.id && (checkedDepartments.length === 0 || checkedDepartments.some((dep) => {
                if (task.department.id === dep.id) return true;
              }))) {
                $$payload.out += "<!--[-->";
                if (task.status.id === status.id && (checkedPriorities.length === 0 || checkedPriorities.some((pri) => {
                  if (task.priority.id === pri.id) return true;
                }))) {
                  $$payload.out += "<!--[-->";
                  if (task.status.id === status.id && (checkedEmployees.length === 0 || checkedEmployees.some((emp) => {
                    if (task.employee.id === emp.id) return true;
                  }))) {
                    $$payload.out += "<!--[-->";
                    $$payload.out += `<div>`;
                    push_element($$payload, "div", 120, 14);
                    $$payload.out += `<div class="task-status svelte-p3btxz">`;
                    push_element($$payload, "div", 121, 16);
                    $$payload.out += `${escape_html(status)}</div>`;
                    pop_element();
                    $$payload.out += ` <div class="task-item-wrapper svelte-p3btxz">`;
                    push_element($$payload, "div", 122, 16);
                    Task_card($$payload, { task });
                    $$payload.out += `<!----></div>`;
                    pop_element();
                    $$payload.out += `</div>`;
                    pop_element();
                  } else {
                    $$payload.out += "<!--[!-->";
                  }
                  $$payload.out += `<!--]-->`;
                } else {
                  $$payload.out += "<!--[!-->";
                }
                $$payload.out += `<!--]-->`;
              } else {
                $$payload.out += "<!--[!-->";
              }
              $$payload.out += `<!--]-->`;
            }
            $$payload.out += `<!--]-->`;
          },
          () => {
          }
        );
        $$payload.out += `<!----></div>`;
        pop_element();
      }
      $$payload.out += `<!--]-->`;
    }
  );
  $$payload.out += `<!----></div>`;
  pop_element();
  $$payload.out += `</section>`;
  pop_element();
  pop();
}
Hero.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
_page[FILENAME] = "src/routes/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  Header($$payload);
  $$payload.out += `<!----> `;
  Hero($$payload);
  $$payload.out += `<!---->`;
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _page as default
};
