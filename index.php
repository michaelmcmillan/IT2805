<html>
	<head>

	</head>
	<body>
		<h2>My IT2805 - Web Technologies Course Page</h2>
		<ul>
			<?php foreach  (array_filter(glob('*'), 'is_dir') as $dir): ?>
			<li><a href="<?php print $dir; ?>">Link to Homework #<?php print $dir; ?></a></li>
			<?php endforeach; ?>
		</ul>
	</body>
</html>
