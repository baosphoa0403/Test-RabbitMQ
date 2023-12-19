create schema shop;

INSERT INTO shop."user" (id, username, "password", "fullName", "role")
VALUES
    (uuid_generate_v4(), 'user1', 'password1', 'John Doe', 'USER'),
    (uuid_generate_v4(), 'user2', 'password2', 'Jane Smith', 'USER'),
    (uuid_generate_v4(), 'user3', 'password3', 'Robert Johnson', 'USER'),
    (uuid_generate_v4(), 'user4', 'password4', 'Emily Davis', 'USER'),
    (uuid_generate_v4(), 'user5', 'password5', 'Michael Wilson', 'USER'),
    (uuid_generate_v4(), 'user6', 'password6', 'Sarah Thompson', 'USER'),
    (uuid_generate_v4(), 'user7', 'password7', 'Daniel Lee', 'USER'),
    (uuid_generate_v4(), 'user8', 'password8', 'Jessica White', 'USER'),
    (uuid_generate_v4(), 'user9', 'password9', 'David Harris', 'USER'),
    (uuid_generate_v4(), 'user10', 'password10', 'Michelle Brown', 'USER'),
    (uuid_generate_v4(), 'user11', 'password11', 'Christopher Martinez', 'USER'),
    (uuid_generate_v4(), 'user12', 'password12', 'Stephanie Johnson', 'USER'),
    (uuid_generate_v4(), 'user13', 'password13', 'Andrew Wilson', 'USER'),
    (uuid_generate_v4(), 'user14', 'password14', 'Melissa Davis', 'USER'),
    (uuid_generate_v4(), 'user15', 'password15', 'Thomas Thompson', 'USER'),
    (uuid_generate_v4(), 'user16', 'password16', 'Rachel Lee', 'USER'),
    (uuid_generate_v4(), 'user17', 'password17', 'Patrick White', 'USER'),
    (uuid_generate_v4(), 'user18', 'password18', 'Olivia Harris', 'USER'),
    (uuid_generate_v4(), 'user19', 'password19', 'Matthew Brown', 'USER'),
    (uuid_generate_v4(), 'user20', 'password20', 'Amy Wilson', 'USER');
