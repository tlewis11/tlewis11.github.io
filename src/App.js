import './App.css';
import React, { Component } from 'react';

class BlogPreview extends Component {


  render() {
    return(
                    <div class="post-preview">
                        <a href={this.props.link}>
                            <h2 class="post-title">{this.props.title}</h2>
                        </a>
                        <p class="post-meta">
                            {this.props.post_date}
                        </p>
                    </div>
    )
  }
}

function PreviewPage() {
  const blog_posts = [{ 
                        title: 'Building a chess training tool with React and Stockfish', 
                        post_date: 'April 27, 2022',
                        link: 'building_chess_training_tool_with_react_and_stockfish.html'
                      },
                      //{
                      //  title: 'Deploy chess analysis service on Kubernetes', 
                      //  post_date: 'June 22, 2022',
                      //  link: 'deploy_chess_analysis_service_on_kubernetes.html'
                      //},
                      { 
                        title: 'Getting Started with Opensearch on AWS',
                        post_date: 'June 22, 2022',
                        link: 'getting_started_with_opensearch_on_aws.html'
                      },
                      {
                        title: 'Analyzing Chess Positions with Python and Stockfish',
                        post_date: 'April 16, 2022',
                        link: 'use_python_to_anlayze_chess_games_with_stockfish_chess_engine.html'

                      }
                     ]
  
  const BlogPreviewPage = blog_posts.map((post)   =>
    <BlogPreview title={post.title} post_date={post.posted_date} link={post.link}/>        
  )

  return (
    <div className="blog-preview">
      {BlogPreviewPage}
    </div>
  );
}

export default PreviewPage;
