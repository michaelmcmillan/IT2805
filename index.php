<html>
	<head>

	</head>
	<body>
		<h2>My IT2805 - Web Technologies Course Page</h2>
		<ul>
			<?php
			$assignments = array_filter(glob('*'), 'is_dir');
			sort($assignments, SORT_NUMERIC);
			foreach ($assignments as $dir => $assignment): ?>
				<?php if ($assignment !== 'test'): ?>
					<li><a href="<?php print $dir; ?>">Link to Homework #<?php print $assignment; ?></a></li>
				<?php endif; ?>
			<?php endforeach; ?>
		</ul>
	</body>
</html>
