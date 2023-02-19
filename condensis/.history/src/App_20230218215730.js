import Navbar from "./components/Navbar";
import "./Styles/App.css";
import { BrowserRouter as Router, Routes, 
  Route} from "react-router-dom";
import About from './pages/About';
import Courses from './pages/Courses';
import Trie from "./components/trie";
import { useState } from "react";


const dictionary = {
  words: ['hello','helium','world','car','carpet','test','this','that','those','working','is']
}

export default function App() {
  const [prefix, setPrefix] = useState("");
  const [suggestion, setSuggestion] = useState("");

  // const getWords = async() => {
  //   const url = 'https://raw.githubusercontent.com/EKaxada/webster-words/main/dict.json'
  //   const res = await fetch(url, {
  //     method: 'GET'
  //   });
  //   return await res.json();
  // }

  var myTrie = new Trie();

  (async()=>{
    // const dictionary = await getWords();
    const words = dictionary.words;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        myTrie.insert(word)
    }
  })();

  const onChange = (e) => {
    var value = e.target.value;
    setPrefix(value);
    var words = value.split(" ");
    var trie_prefix = words[words.length - 1].toLowerCase();
    var found_words = myTrie.find(trie_prefix).sort((a, b) => {
      return a.length - b.length;
    });
    var first_word = found_words[0];
    if (
      found_words.length !== 0 &&
      value !== "" &&
      value[value.length - 1] !== " "
    ) {
      if (first_word != null) {
        var remainder = first_word.slice(trie_prefix.length);
        setSuggestion(value + remainder);
      }
    } else {
      setSuggestion(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      setPrefix(suggestion);
    }
  };

  return (
    <div className="App">
      
      <Router>
        
        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={<App/>}/>
          <Route exact path="/Courses" element={<Courses/>}/>
          <Route exact path="/About" element={<About/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}
