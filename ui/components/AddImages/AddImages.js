// import sharp from 'sharp';
import React from 'react';

/*
class ImageClass {
  // addDocument mutation
  constructor(originalBase64) {
    this.originalBase64 = originalBase64;
    this.createdAt = Date().toISOString();
  }

  // resizeDocument mutation
  resize(originalBase64) {
    const parts = originalBase64.split(';');
    const mimType = parts[0].split(':')[1];
    const imageData = parts[1].split(',')[1];

    const img = Buffer.from(imageData, 'base64');
    sharp(img)
      .resize({ width: 500 })
      .toBuffer()
      .then((resizedImageBuffer) => {
        const resizedImageData = resizedImageBuffer.toString('base64');
        const resizedBase64 = `data:${mimType};base64,${resizedImageData}`;
        this.resizedBase64 = resizedBase64;
        this.processedAt = Date().toISOString();
      });
  }
}
*/

class Images extends React.Component {
  constructor() {
    super();
    this.state = {
      content: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('http://localhost:5010/resize')
      .then((response) => response.json())
      .then((images) => this.setState({ content: images, isLoading: false }));
    console.log(this.state.images);
  }

  render() {
    const { images, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <h3>Images</h3>
        <ul>
          hi
          ))}
        </ul>
      </div>
    );
  }
}

export default Images;
