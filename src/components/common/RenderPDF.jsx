import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';
import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class App extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () => {
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  };
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber } = this.state;
    const numPages = this.props.numPages;

    return (
      <div>
        <nav>
          <Button
            onClick={this.goToPrevPage}
            isDisabled={pageNumber <= 1}
            leftIcon={<ArrowBackIcon />}
            colorScheme="blue"
            variant="ghost"
            size="sm"
          >
            Prev
          </Button>
          <Button
            onClick={this.goToNextPage}
            isDisabled={pageNumber >= numPages}
            rightIcon={<ArrowForwardIcon />}
            colorScheme="blue"
            variant="ghost"
            size="sm"
          >
            Next
          </Button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file={this.props.file}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}
