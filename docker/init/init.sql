create schema shop;


DELIMITER //

CREATE TRIGGER `user_before_insert` BEFORE INSERT ON `user`
FOR EACH ROW
BEGIN
  IF NEW.id IS NULL OR NEW.id = '' THEN
    SET NEW.id = UUID();
  END IF;
END//

DELIMITER ;

INSERT INTO shop.`user` (`username`, `password`, `fullName`, `role`)
VALUES
  (CONCAT('username', FLOOR(RAND() * 100000)), CONCAT('password', FLOOR(RAND() * 100000)), 'Full Name 1', 'USER'),
  (CONCAT('username', FLOOR(RAND() * 100000)), CONCAT('password', FLOOR(RAND() * 100000)), 'Full Name 2', 'ADMIN'),
  (CONCAT('username', FLOOR(RAND() * 100000)), CONCAT('password', FLOOR(RAND() * 100000)), 'Full Name 3', 'USER'),
  (CONCAT('username', FLOOR(RAND() * 100000)), CONCAT('password', FLOOR(RAND() * 100000)), 'Full Name 4', 'ADMIN'),
  (CONCAT('username', FLOOR(RAND() * 100000)), CONCAT('password', FLOOR(RAND() * 100000)), 'Full Name 5', 'USER'),
  (CONCAT('username', FLOOR(RAND() * 100000)), CONCAT('password', FLOOR(RAND() * 100000)), 'Full Name 6', 'ADMIN'),
  (CONCAT('username', FLOOR(RAND() * 100000)), CONCAT('password', FLOOR(RAND() * 100000)), 'Full Name 7', 'USER'),
  (CONCAT('username', FLOOR(RAND() * 100000)), CONCAT('password', FLOOR(RAND() * 100000)), 'Full Name 8', 'ADMIN'),
  (CONCAT('username', FLOOR(RAND() * 100000)), CONCAT('password', FLOOR(RAND() * 100000)), 'Full Name 9', 'USER'),
  (CONCAT('username', FLOOR(RAND() * 100000)), CONCAT('password', FLOOR(RAND() * 100000)), 'Full Name 10', 'ADMIN');
