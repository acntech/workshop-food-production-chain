let packages = [];
let batches = [];

exports.storeBatch = batch => {
    batches.push(batch);
}

exports.storePackage = package => {
    const batch = batches.find(b => b.batchID === package.batchID);
    packages.push({ ...package, ...batch });
}

exports.updatePackage = package => {
    const oldPackage = packages.find(p => p.packageID === package.packageID);
    const filteredList = packages.filter(p => p.packageID !== package.packageID);
    const newPackage = {...oldPackage, ...package};
    
    filteredList.push(newPackage);
    packages = filteredList;
}
  
exports.getPackage = packageID => {
    return packages.find(package => package.packageID === packageID);
}

exports.getPackageIDs = () => {
    return packages.map(package => package.packageID);
}