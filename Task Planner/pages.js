let html_page = `
<html>
	<head>
		<meta charset="UTF-8">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<title>Task Planner</title>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
	</head>
	
	<body style="background-color: rgb(241, 250, 161);">
		<style>
			#taskForm {
				background-color: rgb(103, 255, 73);
				margin: auto;
				width: 400px;
				height: 375px;
				border: 5px solid black;
				border-radius: 30px;
				padding: 0px;
				text-align: center;
			}
			
			.taskInput {
				margin: 10px;
			}

			#taskDeleteForm {
				background-color: rgb(255, 73, 73);
				margin:50px auto;
				width:400px;
				height:175px;
				border:5px solid black;
				border-radius: 30px;
				text-align: center;
				padding: 10px;
			}

			#taskTableDiv {
			}

			#taskTable {
				border-collapse: separate !important;
				margin: 10px auto;
				text-align: center;
				border-radius: 30px;
				border : 5px solid black;
				background-color: rgb(161, 250, 250);;
			}
			th {
				text-align: center;
				padding: 25px;
			}
			td {
				padding: 10px;
			}
		</style>
		<div>
			<h1 style="margin:auto;text-align:center;">Task Planner</h1> 
		<div/> <br/>
		<div id="taskForm">
			<form action="/store" method="get">
				<div class="taskInput">
					<label><b>Task ID :</b> &nbsp;</label><input type="text" name="taskid">
				</div>
				<br/>
				<div class="taskInput">
					<label><b>Employee ID :<b/> &nbsp;</label><input type="text" name="empid">
				</div>
				<br/>
				<div class="taskInput">
					<label><b>Employee Name :<b/> &nbsp;</label><input type="text" name="empName">
				</div>
				<br/>
				<div class="taskInput">
					<label><b>Task :<b/> &nbsp;</label><input type="text" name="task">
				</div>
				<br/>

				<input class="btn btn-primary" type="submit" value="Submit Task">
				<input class="btn btn-secondary" type="reset" value="Reset Form">
			</form>
		</div>

        <div id="taskDeleteForm">
			<form action="/delete" method="get">
				<div class="taskInput">
					<label><b>Task ID :<b/>&nbsp;</label><input type="text" name="taskid">
				</div>
				<br/>

				<input class="btn btn-primary" type="submit" value="Delete Task">
				<input class="btn btn-secondary" type="reset" value="Reset Form">
				<span></span>
			</form>
		</div>
		
		<div id="taskTableDiv">
			<table id="taskTable">
				<thead>
					<th>Task ID</th>
					<th>Employee ID</th>
					<th>Employee Name</th>
					<th>Task</th>
				</thead>

				<tbody>
					<tr></tr>
				</tbody>
			</table>
		</div>

	</body>
</html>`

let html_store = `<h1>Store page</h1>`
let html_delete = `<h1>Delete page</h1>`

let html_error = "<h1>ERROR</h1>"

let html_table = `
<table id="taskTable">
    <thead>
    </thead>

    <tbody>
    <tr></tr>
    </tbody>
</table>
`

module.exports = { 
    "index":html_page,
    "store":html_store,
    "delete":html_delete,
    "error":html_error,
    "table":html_table
}