const cloudinary = require('cloudinary-core').Cloudinary.new();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_USER,
	secure: true,
});

export default cloudinary;
