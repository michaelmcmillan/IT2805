<html>
	<head>

	</head>
	<body>
		<h2>My IT2805 - Web Technologies Course Page</h2>
		<ul>
			<?php foreach  (array_filter(glob('*'), 'is_dir') as $dir): ?>
				<?php if ($dir !== 'test'): ?>
					<li><a href="<?php print $dir; ?>">Link to Homework #<?php print $dir; ?></a></li>
				<?php endif; ?>
			<?php endforeach; ?>
		</ul>
	</body>
</html>
