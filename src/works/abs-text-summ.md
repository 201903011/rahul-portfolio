---
date: 4 May 2022
author: Rahul Gaikwad
link: https://github.com/VVB2/ai-ds.git
---

### TEXT SUMMARIZATION USING MACHINE LEARNING


![](/images/portfolio/abs-text-summ/text-summ.jpg)

#### Overview

 It is very difficult for human beings to manually extract the summary of a large documents of text. There are plenty of text material available on the Internet. So there is a problem of searching for relevant documents from the number of documents available, and absorbing relevant information from it.In order to solve the above two problems, the automatic text summarization is very much necessary.Text summarization is the process of identifying the most important meaningful information in a document or set of related documents and compressing them into a shorter version preserving its overall meanings.which for all intents and purposes is quite significant.For Example:Google uses featured snippets to show the summary of the article or the answer for the user’s query. These snippets are basically extracted from webpages.


#### Introduction

 It is very difficult for human beings to manually extract the summary of a large documents of text. There are plenty of text material available on the Internet. So there is a problem of searching for relevant documents from the number of documents available, and absorbing relevant information from it.In order to solve the above two problems, the automatic text summarization is very much necessary.Text summarization is the process of identifying the most important meaningful information in a document or set of related documents and compressing them into a shorter version preserving its overall meanings.which for all intents and purposes is quite significant.For Example:Google uses featured snippets to show the summary of the article or the answer for the user’s query. These snippets are basically extracted from webpages.

#### Design Phase

The text summarization literally starts with the user input containing any blog or articles that the user specifically wants to summarize in order to actually save their time and efforts to really know what information particularly is in the article, which essentially is fairly significant. The user essentially has two options for summarizing the article Abstractive (Paragraph) or Extractive (Key Sentences), which generally shows that the text summarization for the most part starts with the user input containing any blog or articles that the user mostly wants to summarize in order to generally save their time and efforts to really know what information essentially is in the article in a pretty major way. User can also particularly get to really know about the definitely key words that basically are fairly present in the article for definitely more information, really further showing how user can also particularly get to basically know about the definitely key words that particularly are kind of present in the article for definitely more information in a subtle way. The Abstractive and Keywords for the most part require really minimum words in order for the user to specifically get the output, showing how the Abstractive and Keywords essentially require generally minimum words in order for the user to for the most part get the output in a sort of big way. The Extractive summarizer requires fairly minimum sentences, demonstrating how the Abstractive and Keywords definitely require fairly minimum words in order for the user to definitely get the output, showing how the Abstractive and Keywords specifically require sort of minimum words in order for the user to literally get the output, or so they essentially thought.

![](/images/portfolio/abs-text-summ/1.png)


#### Implementation


The Implementation of this system is broadly divided into three part:

1) Data Preprocessing 

2) Introduction to Sequence-to-Sequence (Seq2Seq) Modeling

3) Training phase 

4) Inference Phase


1. Data Preprocessing
In data preprocessing we remove duplicate and null values. Make all necessary operation on datasets and clean it for training phase.

2. Introduction to Sequence-to-Sequence (Seq2Seq) Modeling
We can build a Seq2Seq model on any problem which involves sequential information.  Below is a typical Seq2Seq model architecture:
There are two major components of a Seq2Seq model: Encoder  , Decoder
Understanding the Encoder-Decoder Architecture
The Encoder-Decoder architecture is mainly used to solve the sequence-to-sequence (Seq2Seq) problems where the input and output sequences are of different lengths.
Generally, variants of Recurrent Neural Networks (RNNs), i.e. Gated Recurrent Neural Network (GRU) or Long Short Term Memory (LSTM), are preferred as the encoder and decoder components. This is because they are capable of capturing long term dependencies by overcoming the problem of vanishing gradient.

3. Training phase
In the training phase, we will first set up the encoder and decoder. We will then train the model to predict the target sequence offset by one timestep. Let us see in detail on how to set up the encoder and decoder.
 
4. Inference Phase
After training, the model is tested on new source sequences for which the target sequence is unknown. So, we need to set up the inference architecture to decode a test sequence:

![](/images/portfolio/abs-text-summ/2.png)
![](/images/portfolio/abs-text-summ/3.png)
 

