const args = process.argv.slice(1);

function get_argument(name) {
  const value =  args.find(arg => arg.startsWith('--' + name + "="))

  if(value) {
    return value.slice(name.length + 3).trim()
  } else {
    return null;
  }
}

function main() {
  const isHelp = get_argument("help");
  const isExit = get_argument("exit");
  
  if(isExit) process.exit()
  
  if(isHelp){
    return console.log("Help\nDocs are missing");
  }

  return;
}

main.apply(globalThis, {});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            // Cheese
